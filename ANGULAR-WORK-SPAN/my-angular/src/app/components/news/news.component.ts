import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  title = "我是一个新闻组件";

  msg = "我是一个消息";

  content = "<h3>绑定的一个H3标签</h3>";

  testContent = `<h1>这样可以绑定HTML标签吗</h1>`;



  // 定义一个数组
  arr = ['11', '22', '33'];

  userList: any[] = [
    {
      userName: '茉莉清',
      userAge: 18
    },
    {
      userName: '小菲菲',
      userAge: 6
    },
    {
      userName: '艾默生',
      userAge: 13
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
