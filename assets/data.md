---
layout: json
permalink: /assets/data.json
---
[
{% for category in site.data.demo %}
    {
        "id": "{{ category.id }}",
        "name": "{{ category.name }}",
        "description": "{{ category.description }}",
        "title": "{{ category.title }}",
        "sort": "{{ category.sort }}",
        "icon": "{{ category.icon }}",
        "active": "{{ category.active }}",
        "models": [
            {% for model in category.models %}

            {% endfor %}
        ]
    }
    {% unless forloop.last %},{% endunless %}
{% endfor %}
]