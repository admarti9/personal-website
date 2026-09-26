---
layout: base.njk
title: Blog
---
# Blog Posts

Here you can browse through everything I have written.

<ul class="post-list">
  {%- for post in collections.posts -%}
    <li class="post-item">
      <a href="{{ post.url }}">{{ post.data.title }}</a>
      <div class="post-meta">Published on: {{ post.date | date: "%Y-%m-%d" }}</div>
    </li>
  {%- endfor -%}
</ul>