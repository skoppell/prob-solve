/*
Implement Trie (Prefix Tree)

Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
*/
function Node(val){
    this.val = val;
    this.isWord = false;
    this.children = new Map();
}
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new Node(-1);
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let parent = this.root;
    let i=0;
    for(;i<word.length;i++){
        if(parent.children.has(word.charAt(i))){
            parent = parent.children.get(word.charAt(i));
        }else{
            break;
        }
    }
    
    for(;i<word.length;i++){
        const newCharNode = new Node(word.charAt(i));
        parent.children.set(word.charAt(i), newCharNode);
        parent = newCharNode;
    }
    parent.isWord = true;
    
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let parent = this.root;
    for(let i=0;i<word.length;i++){
        if(parent.children.has(word.charAt(i))){
            parent = parent.children.get(word.charAt(i));
        }else{
            return false;
        }
    }
    return parent.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  
    let parent = this.root;
    for(let i=0;i<prefix.length;i++){
        if(parent.children.has(prefix.charAt(i))){
            parent = parent.children.get(prefix.charAt(i));
        }else{
            return false;
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */