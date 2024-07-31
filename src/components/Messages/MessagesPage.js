

export default function MessagesPage () {

    /* BRAINSTORM
    * - Envoyer messages vers firebase.
    * - Trier messages et réponses (par admin) en fonction de la date qui est en clé.
    *   Donc on sait l'ordre d'affichage.
    *   Extraire les données de firebase dans une liste d'objet:
    *       [{text: "blablabla", date: AAAA-MM-JJ_HH-MM-SS, type: "message" ou "answer"}, {...}]
    *
    *
    * - Faire une autre collection dans firebase pour les messages.
    *   Mettre les message (ou leur id) dans la collection de chaque utilisateurs.
    *   Il y aurait l'id de l'utilisateur avec chaque message en plus des autres infos (date, type...).
    *   Donc, la page MessagesAdmin écrirerait directement dans les données des autre utilisateurs.
    *
    * - Ecrire reponses directement dans firebase (derniere option)
    * */

    return (
        <div>
            Messages
        </div>
    )
}