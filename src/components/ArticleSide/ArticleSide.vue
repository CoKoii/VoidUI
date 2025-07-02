<script setup lang="ts">
import { Anchor } from 'ant-design-vue'
defineExpose({
  name: 'ArticleSide',
})
</script>

<template>
  <div class="ArticleSide">
    <div class="main">
      <slot></slot>
    </div>
    <div class="nav">
      <Anchor
        :affix="false"
        :items="[
          {
            key: '1',
            href: '#button-types',
            title: '按钮类型',
          },
          {
            key: '2',
            href: '#hhhh',
            title: 'Static demo',
          },
          {
            key: '3',
            href: '#api',
            title: 'API',
            children: [
              {
                key: '4',
                href: '#anchor-props',
                title: 'Anchor Props',
              },
              {
                key: '5',
                href: '#link-props',
                title: 'Link Props',
              },
            ],
          },
        ]"
      ></Anchor>
    </div>
  </div>
</template>

<style lang="scss">
@use './ArticleSide.scss';
@use './markdown.scss';
</style>
