<template>
    <div class="home">
      <div class="blog">
        <ul class="blog-list">
          <li v-for="(item, index) in blogList" :key="index" @click="itemClick(item)">
            <div class="left">
              <div class="title">{{item.title}}</div>
              <div class="date">{{item.date}}</div>
              <div class="tag">
                <span  v-for="tag in item.tag" :key="tag">{{tag}}</span>
              </div>
            </div>
            <div class="right">
              <!-- <img src="../asset/empty-bg.png" alt=""> -->
              <!-- <div class="emoji">💻</div> -->
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { useData, useRouter, withBase } from 'vitepress'
 
const router = useRouter()

const blogList = [
  {
    title: '在JavaScript中引入类型的提案（翻译）',
    date: '2022-3-10',
    tag: ['Type', 'JavaScript', 'TypeScript'],
    link: '../blog/article/article-2022-3-10'
  }
]

const itemClick = (item) => {
  router.go(withBase(item.link))
}

</script>

<style scoped>
.home {
  margin-top: 60px;
}
.blog {
  width: 800px;
  margin: 0 auto;
}
.blog-list li {
  list-style: none;
  padding: 18px;
  border-radius: 16px;
  background: var(--vp-c-bg-mute);
  box-shadow: var(--vt-shadow-2);
  display: flex;
}
.blog-list li .left {
  flex-grow: 1;
}
.blog-list li .right img{
  width: 86px;
  height: 86px;
}
.blog-list li .right .emoji{
  font-size: 84px;
  line-height: 1;
}
.blog-list li:hover {
  background-color: var(--vp-button-alt-hover-bg);
  transition-duration: .2s;
}
.blog-list li .title {
  font-weight: bold;

}

.blog-list li .date {
  margin-top: 8px;
  font-size: 14px;
}
.blog-list li .tag {
  margin-top: 8px;
}
.blog-list li .tag span {
  display: inline-block;
  font-size: 10px;
  background: rgba(203, 154, 47, 0.5);
  padding: 0 4px;
  line-height: 14px;
  border-radius: 4px;
  margin-right: 6px;
}
</style>