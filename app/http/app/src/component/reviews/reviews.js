import React, { Component } from 'react'
import Quote from '../../assets/quote.png'
import './reviews.css'


export const Reviews = ()=> {
    return (
        <section id = "reviews">
            <div className = "summary">
                <h2>What People are Saying</h2>
                <p>People are commenting good stories about us in Google Play Store. We love Reviews!!</p>
            </div>
            <div className = "comments">
                <Comment comment={"우선 UI에 군더더기가 없는 것이 마음에 듭니다. 필요한 기능만 탑재되어 있어 사용자 입장에서는 이용하기 쉽네요. 특히 스크립트를 입력할 때 키보드 입력뿐만 아니라 음성 입력도 지원이 되는 것도 사용자를 배려한 것 같아 마음에 듭니다. 프리젠테이션을 할 때 중요한 것이 시간 배분인데 테스트해보니 진동으로 키 포인트를 알려줘서 든든할 것 같아요. 또한 여러 프리젠트를 관리할 수 있는 것도 괜찮은 것 같아요. 학생, 직장인 가릴 것 없이 모두에게 편리함을 제공하는 어플 같습니다."} 
                    rating="5" author="VENUS" />               
                <Comment comment={"사용해봤는데 정말 좋은 앱이에요! 스크립트를 음성으로 넣을 수 있게 되어있어서 그 부분에서 좀 감탄…ㅎㅎㅎ 아무래도 발표시간이 길수록 스크립트가 기니까 저같이 자판치는 것도 귀찮아하는 사람한테는 편리하죠~ 사용자 중심으로 많이 생각하신거 같아요. 유용하게 잘쓰겠습니다!!"} 
                    rating="5" author="김하람" />               
                <Comment comment={"평소 발표를 할 때 시간 배분을 잘 못해서 많이 떠는데 이걸로 몇번 연습해보니 확실히 시간 배분하는 느낌이 다르더라구요! 아무래도 실제에 가면 떨리니까 시계를 봐도 어떻게 해야할지 감이 잘 안잡혔는데 이앱은 시간이 되면 진동이 울리니깐 그때마다 시간 배분을 할 수 있게되서 좋은 것 같아요ㅜㅜ 앞으로 계속 발표 수업이 있는데 그때마다 유용하게 사용할 것 같습니다! 좋은 앱 감사드려용!"} 
                    rating="5" author="빙빙봉" />               
            </div>
        </section>
    )
}

class Comment extends Component {
    render() {
        return (
            <div className = "comment-wrap">
                <div className = "comment-box">
                    <img className = "comment-img" src={Quote} alt="quote"/>
                    <p className = "comment-text">
                        {this.props.comment}
                    </p>
                </div>
                <div className = "tri"></div>
                <div className = "rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <div className = "etc">
                    <span className = "author">
                        {this.props.author}
                    </span>
                </div>
            </div>
        )
    }
}