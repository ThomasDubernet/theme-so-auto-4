import React from 'react'
import Carousel from 'react-spring-3d-carousel';
import caretRight from '../img/caret-right-solid.svg'

export default class Slider extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       slides: []
    }
  }
  
  
  componentDidMount() {
    const items = []
    this.props.slides.forEach((item, index) => {
      items.push({
        key: index,
        content : 
        <div key={index} data-key={index} className={"carousel__item "}>
          <div className="d-flex">
            <h3 className="ml-auto mr-7"> {item.comment} </h3>
          </div>
          <h3 className="font-weight-bold"> {item.name} </h3>
          <p className="text-white font-weight-bold"> {item.ville} </p>
          <p> {item.description} </p>
        </div>
      })
    })
    this.setState({slides: items})
  }

  componentDidUpdate() {
    const navigation = document.querySelector('.css-1qzevvg')
    navigation.style.width = '100%'
    navigation.style.zIndex = '9'
    navigation.style.position = 'absolute'
    navigation.style.top = '50%'
    navigation.style.transform = 'translateY(-50%)'

    const navigationBtn = Array.from(navigation.children)
    navigationBtn.forEach((btn, index) =>{
      btn.style.cursor = 'pointer'
      btn.setAttribute('src', caretRight)

      if (window.screen.width >= 768) {
        if (index === 0){
          btn.style.transform = 'rotate(180deg) translateX(170%)'
        }
      }
      else if (window.screen.width < 768){
        if (index === 0){
          btn.style.transform = 'rotate(180deg) translateX(30%)'
        }
        else {
          btn.style.transform = 'translateX(-170%)'
        }
      }
    })
  }

  render() {
    return (
      <Carousel 
        slides={this.state.slides}
        goToSlide={0}
        offsetRadius={2}
        showNavigation={true}
        animationConfig={{ tension: 120, friction: 14 }}
      />
    )
  }
}
