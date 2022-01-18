import { useCallback, useEffect, useState } from "react"
import api from "../services/api"
import PixieButton from "../components/PixieButton"

export default function Members() { 
  const [members, setMembers] = useState([])

  const getMember = useCallback(async() => {
    try {
      const response = await api.get("/members")
      setMembers(response.data)
    } catch (e) {
      console.log(e)
    }
  }, [])

  useEffect(() => {
    getMember()
  }, [])

  return (
    <div>
      {
        members.map((member) => {
          return (
            <PixieButton text={member.email} link="http://google.com"/>
          )
        })
      }
    </div>
  )
}