---
layout: page
title: Experience
permalink: /experience/
nav: true
nav_order: 2
description: Research, internships, and academic experience.
---

{% for entry in site.data.cv.cv.sections.Experience %}

### {{ entry.company }}

**{{ entry.position }}**  
{{ entry.location }} · {{ entry.start_date | date: "%b %Y" }} – {% if entry.end_date == 'present' %}Present{% else %}{{ entry.end_date | date: "%b %Y" }}{% endif %}

{% if entry.summary %}{{ entry.summary }}{% endif %}
{% for highlight in entry.highlights %}

- {{ highlight }}
  {% endfor %}
  {% unless forloop.last %}

---

{% endunless %}
{% endfor %}
