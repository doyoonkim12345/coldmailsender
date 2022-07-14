import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import { useMutation } from 'react-query'
import axios from 'axios'

const Input = tw.input`
  border
`
const Form = tw.form`
  w-[100px]
  h-screen
  flex
  flex-col
`
const Textarea = tw.textarea`
  w-full
  flex-1
`

const sendEmailReq = async (mailContext: {
  email: string
  password: string
  text: string
}): Promise<void> => {
  await axios.post('http://api.localhost:8080/', mailContext, {
    // headers: { Origin: 'http://localhost:3000/' },
  })
}

const Home = () => {
  const [email, setEmail] = useState('1')
  const [password, setPassword] = useState('2')
  const [text, setText] = useState('3')

  const { mutate } = useMutation(sendEmailReq, {
    onSuccess: () => console.log('이메일 송신완료'),
    onError: () => console.log('이메일 송신 실패'),
  })

  return (
    <Form
      onSubmit={(e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        mutate({ email, password, text })
      }}
    >
      <p>
        <Input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
          id="email"
        />
        <Input
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
          id="password"
        />
        <button type="submit">이메일 전송</button>
      </p>
      <Textarea
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
      />
      <div>
        <p>console</p>
      </div>
    </Form>
  )
}

export default Home
