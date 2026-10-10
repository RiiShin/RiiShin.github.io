---
layout: page
title: Honors & Service
permalink: /honors-service/
nav: true
nav_order: 3
---

## Honors

{% for award in site.data.cv.cv.sections.Awards %}

### {{ award.title }}

{{ award.awarder }} · {{ award.date | date: "%b %Y" }}

{% if award.summary %}{{ award.summary }}{% endif %}
{% endfor %}

## Academic service

{% for service in site.data.cv.cv.sections.Service %}

- **{{ service.label }}:** {{ service.details }}
  {% endfor %}
