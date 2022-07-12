import React from 'react'

import { Container, Content, Image, Title, Bio } from './styles'

type ProfileProps = {
  avatarURL?: string
  name?: string
  bio?: string
}

const Profile: React.FC<ProfileProps> = ({
  avatarURL = '',
  name = '',
  bio = ''
}) => {
  return (
    <Container>
      <Image src={avatarURL} />
      <Content>
        <Title>{name}</Title>
        <Bio title={bio}>{bio}</Bio>
      </Content>
    </Container>
  )
}

export default Profile
