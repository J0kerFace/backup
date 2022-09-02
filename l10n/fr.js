OC.L10N.register(
    "backup",
    {
    "Scan Backup Folder" : "Scanner le dossier de sauvegarde",
    "Backup" : "Sauvegarde",
    "Update on all Backup's event" : "Mettre à jour tous les événements de sauvegarde",
    "complete" : "complète",
    "partial" : "partielle",
    "seconds" : "secondes",
    "minutes" : "minutes",
    "hours" : "heures",
    "days" : "jours",
    "A new restoring point ({type}) has been generated, requiring maintenance mode for {downtime}." : "Un nouveau point de restauration ({type}) a été généré, le mode maintenance est requis durant {downtime}.",
    "Your system have been fully restored based on a restoring point from {date} (estimated rewind: {rewind})" : "Votre système a été entièrement restauré à partir du point de sauvegarde du {date} (retour en arrière estimé: {rewind})",
    "The file {file} have been restored based on a restoring point from {date} (estimated rewind: {rewind})" : "Le fichier {file} a été restauré à partir du point de sauvegarde du {date} (retour en arrière estimé: {rewind})",
    "Backup now. Restore later." : "Sauvegarder maintenant. Restaurer plus tard.",
    "The Backup App creates and stores backup images of your Nextcloud:\n\n- Backup the instance, its apps, your data and your database,\n- Administrator can configure the time slots for automated backup,\n- Full and Partial backup, with different frequencies,\n- 2-pass to limit downtime (maintenance mode) of your instance,\n- Compression and encryption,\n- Upload your encrypted backup on an external filesystem,\n- Download and search for your data,\n- Restore single file or the entire instance." : "L’application de sauvegarde crée et stocke des images de sauvegarde de votre Nextcloud :\n\n- sauvegarde de l’instance, ses applications, vos données et votre base de données,\n- l’administrateur peut configurer les plages horaires pour la sauvegarde automatisée.\n- sauvegarde complète et partielle, avec des fréquences différentes,\n- 2 passes pour limiter le temps d’arrêt (mode maintenance) de votre instance,\n- compression et chiffrement,\n- envoi de votre sauvegarde chiffrée sur un système de fichiers externe,\n- téléchargement et recherche de vos données,\n- restauration d'un seul fichier ou de l’instance complète",
    "App Data" : "Données de l'application",
    "Choose where the backup app will initially store the restoring points." : "Choisir où l’application de sauvegarde stockera initialement les points de restauration.",
    "Path in which to store the data. (ex: app_data)" : "Chemin dans lequel stocker les données. (ex. : 'app_data')",
    "Set as App Data" : "Définir comme stockage",
    "Error" : "Erreur",
    "Changing the App Data will delete the data stored in the previous one including restoring points." : "Changer le stockage effacera les données stockées dans le précédent emplacement et les points de restauration.",
    "I understand some data will be deleted." : "Je comprends que certaines données vont être effacées",
    "Change the App Data" : "Changer le stockage",
    "Local storage" : "Stockage local",
    "Unable to fetch app data" : "Impossible de récupérer les données d'application",
    "App data has been set" : "Stockage défini",
    "Unable to set app data" : "Impossible de définir le stockage",
    "Restoring points locations" : "Emplacement des points de restauration",
    "Manage available storage locations for storing restoring points" : "Gérer les emplacements de stockage pour les points de restauration",
    "Path in which to store the restoring points. (ex: backups)" : "Emplacement des points de restauration. (ex: backups)",
    "Add new external location" : "Ajouter un stockage externe",
    "External storage" : "Stockage externe",
    "Restoring point location" : "Emplacement du point de restauration",
    "Actions" : "Actions",
    "Delete" : "Supprimer",
    "No external storage available" : "Aucun stockage externe disponible",
    "If you want to store your restoring points on an external location, configure an external storage in the \"External storage\" app." : "Si vous voulez stocker vos sauvegardes sur un système externe, veuillez configurer un stockage externe dans l'application \"Stockage externe\".",
    "No external locations set" : "Aucun stockage externe configuré",
    "You can add a new location with the above form." : "Vous pouvez ajouter un nouvel emplacement avec le formulaire ci-dessus.",
    "Unable to fetch external locations" : "Impossible de récupérer les stockages externes",
    "New external location added" : "Stockage externe ajouté",
    "Unable to save new external location" : "Impossible de sauvegarder le nouveau stockage externe",
    "External location deleted" : "Stockage externe supprimé",
    "Unable to delete the external location" : "Impossible de supprimer le stockage externe",
    "Backups configuration" : "Configuration des copies de sauvegarde",
    "General configuration on how and when your restoring points are created." : "Configuration générale sur comment et quand les points de restauration sont créés.",
    "Enable background tasks" : "Activer les tâches de fond",
    "You can enable background task for backups. This means that the creation, maintenance and purges of backups will be done automatically." : "Vous pouvez activer les tâches de fond pour les sauvegardes. La création, la maintenance et les purges seront faites automatiquement.",
    "Creation: New restoring points will be created according to the schedule." : "Création: les points de restauration seront créés selon la planification.",
    "Maintenance: Restoring points will be packed and copied to potential external storages." : "Maintenance: les points de restauration seront compressés et copiés sur les stockages externes existants.",
    "Purge: Old restoring points will be deleted automatically according to the retention policy." : "Purge: Les anciens points de restauration seront automatiquement effacés selon la politique de rétention.",
    "Enable background tasks to automatically manage creation, maintenance and purge." : "Activez les tâches de fond pour gérer automatiquement la création, la maintenance et la purge.",
    "Backup schedule" : "Planification de la copie de sauvegarde",
    "Limit restoring points creation to the following hours interval:" : "Limiter la création de points de restauration aux heures d'intervalle suivantes :",
    "and" : "et",
    "Allow the creation of full restoring points during week day" : "Permettre la création de points de restauration complets pendant les jours de semaine",
    "Time interval between two full restoring points" : "Intervalle entre deux points de restauration complets",
    "Time interval between two partial restoring points" : "Intervalle entre deux points de restauration partiels",
    "Packing processing" : "Processus de traitement",
    "Processing that will be done on the restoring points during the packing step." : "Processus qui seront exécutés lors du traitement de la sauvegarde.",
    "Encrypt restoring points" : "Chiffrer des points de restauration",
    "Compress restoring points" : "Compresser les points de restauration",
    "Retention policy" : "Politique de rétention",
    "You can specify the number of restoring points to keep during a purge." : "Vous pouvez préciser le nombre de points de sauvegarde à conserver durant une purge.",
    "Policy for the local app data" : "Politique pour les données locales",
    "Policy for external storages" : "Politique pour les stockages externes",
    "Export backup configuration" : "Exporter la configuration de sauvegarde",
    "You can export your settings with the below button. The exported file is important as it allows you to restore your backup in case of full data lost. Keep it in a safe place!" : "Vous pouvez exporter vos paramètres en utilisant le bouton ci-dessous. Le fichier exporté est important car il vous permet de restaurer vos sauvegardes en cas de perte totale de données. Gardez-les en toute sécurité !",
    "Export configuration" : "Exporter la configuration",
    "Your settings export as been downloaded encrypted. To be able to decrypt it later, please keep the following private key in a safe place:" : "Vos paramètres ont été téléchargés chiffrés. Pour pouvoir les déchiffrer plus tard, merci de garder la clé privé suivante en lieu sûr :",
    "Request the creation of a new restoring point now" : "Demander la création d'un nouveau point de restauration tout de suite",
    "The creation of a restoring point as been requested and will be initiated soon." : "La création d'un point de restauration a été demandée et débutera bientôt.",
    "Create full restoring point" : "Créer un point de restauration complet",
    "Requesting a backup will put the server in maintenance mode." : "Demander une sauvegarde mettra le serveur en mode maintenance.",
    "I understand that the server will be put in maintenance mode." : "Je comprends que le serveur sera mis en mode maintenance.",
    "Cancel" : "Annuler",
    "Request {mode} restoring point" : "Demander {mode} un point de restauration",
    "Unable to fetch the settings" : "Impossible de récupérer les paramètres",
    "Settings saved" : "Paramètres sauvegardés",
    "Unable to save the settings" : "Échec de la sauvegarde des paramètres",
    "Unable to request restoring point" : "Impossible de demander un point de restauration.",
    "Unable to export settings" : "Échec de l'export des paramètres",
    "_day_::_days_" : ["jour","jours","jours"],
    "Scheduled" : "Planifié",
    "Pending" : "En attente",
    "Not completed" : "Non terminé",
    "Orphan" : "Orphelin",
    "Completed" : "Terminé",
    "Encrypted" : "Chiffré",
    "Compressed" : "Compressé",
    "Restoring points history" : "Historique des points de restauration",
    "List of the past and future restoring points" : "Liste des points de restauration passés et à venir",
    "Issue" : "Incident",
    "Health" : "Santé",
    "Status" : "État",
    "Date" : "Date",
    "ID" : "ID",
    "No issue" : "Pas d'incident",
    "Local" : "Local",
    "local" : "local",
    "Next full restoring point" : "Prochain point de restauration complet",
    "Next partial restoring point" : "Prochain point de restauration partiel"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
