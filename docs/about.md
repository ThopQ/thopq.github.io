---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/ThopQ.png',
    name: 'Thomas Iseli',
    title: 'Full Stack Developer',
    links: [
      { icon: 'github', link: 'https://github.com/ThopQ' },
      { icon: 'twitter', link: 'https://twitter.com/ThopQ' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
        Meet the Developer
    </template>
    <template #lead>
        This is a short overview about my work!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
