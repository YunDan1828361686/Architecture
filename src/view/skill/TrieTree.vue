<template>
  <div v-html="highlightedText"></div>
</template>

<script>
// 定义前缀树节点
function TrieNode() {
  this.children = {};
  this.isWord = false;
}

// 前缀树
function Trie() {
  this.root = new TrieNode();
}

// 插入词语
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
  }
  node.isWord = true;
};

export default {
  props: {
    text: String,
    keywords: Array,
  },
  computed: {
    highlightedText() {
      const trie = new Trie();
      this.keywords.forEach((keyword) => trie.insert(keyword));
      return this.highlightWords(this.text, trie);
    },
  },
  methods: {
    // 搜索并高亮词语
    highlightWords(text, trie) {
      let node = trie.root;
      let result = "";
      let word = "";

      for (let i = 0; i < text.length; i++) {
        word += text[i];
        if (node.children[text[i]]) {
          node = node.children[text[i]];
        } else {
          result += word;
          word = "";
          node = trie.root;
        }

        if (node.isWord && word.length > 0) {
          // 使用内联样式来高亮词语
          result += `<span style="background-color: yellow;">${word}</span>`;
          word = "";
          node = trie.root;
        }
      }

      if (word.length > 0) {
        result += word;
      }

      return result;
    },
  },
};
</script>