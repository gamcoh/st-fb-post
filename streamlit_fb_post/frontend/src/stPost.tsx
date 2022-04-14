import {
  StreamlitComponentBase,
  withStreamlitConnection,
  Streamlit
} from "streamlit-component-lib"
import React, { ReactNode } from "react"
import styled from '@emotion/styled'
import profilePic from './assets/profile.png'


class Post extends StreamlitComponentBase {
  public componentDidUpdate = () => {
    Streamlit.setFrameHeight()
  }

  public componentDidMount = () => {                           
    Streamlit.setFrameHeight()                           
  }

  public render = (): ReactNode => {
    const { text, picture, link, legend } = this.props.args;

    const Avatar = styled.img({
      border: `1px solid transparent`,
      borderRadius: '50%',
      height: '2.8rem',
      width: '2.8rem',
      margin: 0,
    })
    const MessageDiv = styled.div({
      padding: '1rem',
    })
    const Post = styled.div({
      fontFamily: `'Segoe UI', 'Roboto', sans-serif`, 
      height: 'auto',
      margin: 0,
      width: '100%',
      flexFlow: 'column',
      borderRadius: '0.5rem',
      border: `1px solid #e6e6e6`,
      backgroundColor: '#f5f5f5',
    })
    const DivProfile = styled.div({
      display: 'flex',
      padding: '1rem',
      alignItems: 'flex-start',
      flexDirection: 'row',
    })
    const DivProfileContainer = styled.div({
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '0.5rem',
    })
    const ProfileName = styled.span({
      fontSize: '0.9rem',
      fontWeight: 'bold',
    })
    const ProfileDate = styled.span({
      fontSize: '0.8rem',
      color: '#828282',
    })
    const AnswerBtn = styled.a({
      backgroundColor: '#3b5998',
      border: '1px solid #3b5998',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      cursor: 'pointer',
    })
    // the container for the buttons
    // will be aligned to the right
    const BtnContainer = styled.div({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '0 1rem 1rem',
    })
    const ImgContainer = styled.div({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginLeft: '-2px',
      marginRight: '-2px',
      marginBottom: '1rem',
    })
    const Img = styled.img({
      width: '100%',
      border: '1px solid #f5f5f5',
    })

    let pic = picture || []

    return (
      <Post>
        <DivProfile>
          <Avatar alt="profile" draggable="false" src={profilePic} />

          <DivProfileContainer>
            <div>
              <ProfileName>Le profile Facebook est caché.</ProfileName>
            </div>

            <div className="mt--5">
              <ProfileDate>{legend}</ProfileDate>
            </div>
          </DivProfileContainer>
        </DivProfile>

        <MessageDiv>
          {text}
        </MessageDiv>

        {pic && (
          <ImgContainer>
            {Array.isArray(pic) && pic.map((img: string, index: number) => (
              <Img key={index} src={img} alt="post" onLoad={() => this.forceUpdate()} />
            )) || <Img src={pic} alt="post" onLoad={() => this.forceUpdate()} />}
          </ImgContainer>
        )}

				<BtnContainer>
          <AnswerBtn href={link}>Voir les réponses</AnswerBtn>
        </BtnContainer>
      </Post>
    )
  }
}

export default withStreamlitConnection(Post);
