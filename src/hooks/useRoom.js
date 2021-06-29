import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { database } from "../services/firebase";

function useRoom(roomId) {
  const { user } = useContext(AuthContext);
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on("value", room => {
      const databaseRoom = room.val();
      const firebaseQuestions = databaseRoom.questions ?? {};

      console.log(firebaseQuestions)

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighLighted: value.isHighLighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
        }
      })

      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions)
    })

    return () => {
      roomRef.off('value')
    }
  }, [roomId, user?.id])

  return { questions, title }
}

export default useRoom;