import React, { Component } from 'react'
import './development.css'

export const Development = ()=> {
    return (
        <section id = "development">
            <div className = "contents">
                <span className = "description">development</span>
            </div>
            <iframe width="560" height="315" src="http://localhost:3002/"></iframe>
            <div class="preview"><h2 id="flask">Flask의 개념</h2>
            <p>플라스크는 Python 기반의 웹 프레임워크로 Django와 더불어 많은 인기를 얻고 있다. <strong>경량의 마이크로 프레임워크</strong>이며, <strong>멀티 스레드</strong> 형태의 요청을 받아서 처리한다. </p>
            <ul>
            <li><p>가볍다(<strong>Lightweight, Minimal</strong>)</p>
            <p>Django가 이미 만들어져 있는 웹 어플리케이션을 수정하는 느낌이라면 Flask는 無에서 필요한 기능부터 하나하나 추가해 나간다. 간단한 웹 서버나 REST API를 구축하기에 좋다. </p></li>
            <li><p>Open Source</p></li>
            <li><p>Documentation</p>
            <p>공식 튜토리얼을 제공한다.</p>
            <p><a href="http://flask.pocoo.org/docs/0.12/tutorial/introduction/">http://flask.pocoo.org/docs/0.12/tutorial/introduction/</a></p></li>
            <li><p>Easy to use</p></li>
            <li><p>Well designed</p></li>
            </ul>
            <h2 id="">개요</h2>
            <p><strong>마이크로(micro) 프레임워크란?</strong></p>
            <p>Django와 같은 풀스택 프레임워크는 보통 웹 프로그래밍을 할 때 필요로 하는 모든 것들이 종합적으로 갖추어진 프레임워크를 의미하는데 마이크로 프레임워크는 파이선 웹 프로그래밍에서 가장 핵심적인 요소만 포함하고 있다.</p>
            <p><strong>Flask 시작하기</strong></p>
            <p>마이크로 웹 프레임워크인 <code>Flask</code>는 <code>Django</code>와 더불어 인기있는 Phthon 웹 프로그래밍 프레임워크다. 프로그래미어는 데이터베이스 통합, 폼 유효성 검사, 업로드 처리, 다양한 개방형 인증 기술 등을 프로그래머와 환경에 맞게 추가하거나 직접 개발하여 사용할 수 있다. 또한 <code>Hook</code>을 걸어 Flask의 동작을 쉽게 제어할 수 있다.</p>
            <p><strong>Flask와 함께 설치되는 의존성 라이브러리</strong></p>
            <ul>
            <li>WSGI 코어</li>
            <li>werkzeug(벡자이그) (URL 라우팅 지원)</li>
            <li>Jinja2</li>
            </ul>
            <p><strong>기타 특징</strong></p>
            <ul>
            <li>Flask는 환경 설정 값(템플릿 경로, static 파일 경로 설정 등)을 가지고 있다.</li>
            <li>소스 트리 내 static, templates 디렉터리를 갖춰야 한다.</li>
            </ul></div>
        </section>
    )
}