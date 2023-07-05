// 链表节点类
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 链表类
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 在链表末尾添加节点
  append(value) {
    const newNode = new Node(value);
        if (value.item==0) {   //如果插入的是主题
          if (!this.head) {  //同时开始没有一个节点
            this.head = newNode;
            this.tail = newNode;
          }else{
            newNode.next=this.head
            this.head=newNode
          }
        }else {
          if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
          } else {
            this.tail.next = newNode;
            this.tail = newNode;
          }
    }
    
  }
  //更改某一个节点的值
  changeValue(oldValue,newValue){
    let current = this.head;
    while (current) {
      if (current.value === oldValue) {
        current.value = newValue;
        break;
      }
      current = current.next;
    }
  }

  // 删除指定值的节点
  remove(value) {
    if (!this.head) {
      return;
    }

    // 如果头节点的值匹配，则移除头节点
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    // 更新尾节点
    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  // 正面元素拼接
  printObverse() {
    let currentNode = this.head;
    let value = "/imagine prompt:";
    while (currentNode) {
      if (currentNode.value.sort=="正向") {
        const type = "data-custom-attr="+currentNode.value.type+"";
        if (currentNode.value.weight>0) {   //具有正权重
          value+="<span class='title' "+type+">("+currentNode.value.English+":"+currentNode.value.weight+")</span>,"
        }else if(currentNode.value.weight<0){ //具有负权重
          value+="<span class='title' "+type+">["+currentNode.value.English+":"+currentNode.value.weight+"]</span>,"
        }else {
          value+="<span class='title' "+type+">"+currentNode.value.English+"</span>,";
        }
      }else if(currentNode.value.item!=undefined){
        value+=currentNode.value.newValue+","
      }
      currentNode = currentNode.next;
    }
    return value;
  }
    // 反面元素拼接
  printReverse() {
    let currentNode = this.head;
    let value = "";
    while (currentNode) {
      if (currentNode.value.sort=="反向") {
        const type = "data-custom-attr="+currentNode.value.type+"";
        if (currentNode.value.weight>0) {   //具有正权重
          value+="<span class='title' "+type+">("+currentNode.value.English+":"+currentNode.value.weight+")</span>,"
        }else if(currentNode.value.weight<0){ //具有负权重
          value+="<span class='title' "+type+">["+currentNode.value.English+":"+currentNode.value.weight+"]</span>,"
        }else {
          value+="<span class='title' "+type+">"+currentNode.value.English+"</span>,";
        }
      }
        currentNode = currentNode.next;
    }
    return value;
  }
  //获得lable的数组
  getLable(){
    let currentNode = this.head;
    let value = [];
    while (currentNode) {
      if (typeof currentNode.value ==='object'&&currentNode.value!==null&&currentNode.value.url!=null) {
        console.log(currentNode.value);
        value.push(currentNode.value)
      }
      currentNode = currentNode.next;
    }
    return value;
  }
}
export default new LinkedList();