/**
 * Nextcloud - Backup now. Restore later.
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Maxence Lange <maxence@artificial-owl.com>
 * @copyright 2021, Maxence Lange <maxence@artificial-owl.com>
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

/** global: OCA */

import axios from '@nextcloud/axios'
import { generateOcsUrl } from '@nextcloud/router'
import { showSuccess, showWarning } from '@nextcloud/dialogs'

const Backup = function() {
	this.init()
}

Backup.prototype = {

	fileActions: null,

	init() {
		this._initFileActions()
	},

	_initFileActions() {
		const self = this

		this.fileActions = OCA.Files.fileActions
		this.fileActions.registerAction({
			name: 'ScanBackupFolder',
			displayName: t('backup', 'Scan Backup Folder'),
			mime: 'file',
			filename: 'restoring-point.data',
			order: -50,
			iconClass: 'icon-folder',
			permissions: OC.PERMISSION_READ,
			actionHandler: self.scanBackupFile,
		})
	},

	async scanBackupFile(fileName, context) {
		const fileId = context.$file.data('id')

		try {
			const res = await axios.post(generateOcsUrl('apps/backup/action/scan/') + fileId + '?format=json')
			showSuccess(res.data.ocs.data.message)
		} catch (e) {
			showWarning((e.message) || 'failed to initiate scan')
		}
	},
}

OCA.Files.Backup = Backup

window.addEventListener('DOMContentLoaded', function() {
	OCA.Files.Backup = new Backup()
})
