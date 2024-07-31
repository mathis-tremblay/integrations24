

export async function WriteAnswer() {
    // Writes the asnwer to the Messages collection.
    // [{text: "blablabla", date: AAAA-MM-JJ_HH-MM-SS, type: "answer", id: xxxxxx}, {...}]
    // Also writes the id of the answer in the user's collection.
    // id: xxxxxx
}

export async function WriteMessage() {
    // Writes the message to the Messages collection.
    // [{text: "blablabla", date: AAAA-MM-JJ_HH-MM-SS, type: "message", id: xxxxxx}, {...}]
    // Also writes the id of the message in the user's collection.
    // id: xxxxxx
}

export async function ReadMessages() {
    // Gets the message from Messages collection using the ids in the user's collection
    // Sorts the messages by date, then by type (answer or message)
}