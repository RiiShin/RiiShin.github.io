---
layout: about
title: About
chinese_name: 修 立信
permalink: /
subtitle: PhD Student · The University of Tokyo
profile:
  align: right
  image: Web.JPG
  image_circular: false
selected_papers: false
social: true
announcements:
  enabled: false
latest_posts:
  enabled: false
---

<style>
  .post-title .chinese-name { display: inline-block; }
  @media (max-width: 575px) {
    .social .contact-icons { font-size: 2.4rem; }
  }
</style>

Nice to meet you! I’m currently a PhD student at the Graduate School of Information Science and Technology, the University of Tokyo, supervised by Prof. Hideki Nakayama.

My research interests include **post-training for multimodal large language models (mLLMs) and agents**, **multi-agent systems**, and **information theory**.

I’m actively looking for full-time research positions. If you’d like to chat about anything, please feel free to [contact me](mailto:xiu-lixin106@g.ecc.u-tokyo.ac.jp).

## Education

- **The University of Tokyo**, Tokyo, Japan  
  PhD in Information Science and Technology · Oct 2024 – Sep 2027 (expected)  
  Supervisor: Prof. Hideki Nakayama
- **The University of Tokyo**, Tokyo, Japan  
  Master of Information Science and Technology · Oct 2022 – Sep 2024  
  Department of Mathematical Informatics
- **Xi’an Jiaotong University**, Xi’an, China  
  B.E. in Computer Science and Technology · Aug 2018 – Jul 2022

{% include publication_sections.liquid %}

{% include home_sections.liquid %}

<script>
  // Preserve links shared from the previous single-page site.
  const previousSections = {
    '#publications': '/#selected-publications',
    '#honors--service': '/#honors-service',
    '#cv': '/#misc'
  };
  const redirectPreviousSection = () => {
    const destination = previousSections[window.location.hash];
    if (destination) window.location.replace(destination);
  };
  window.addEventListener('hashchange', redirectPreviousSection);
  redirectPreviousSection();
</script>
