/** 
 *
 * your solution here
 *
 */
import {Linked, Node} from '../../../../jerl/linked/node5es.js'
/*function Node(data) {
  this.data = data
  this.next = null
}*/

let n1 = new Node('1')
let n2 = new Node('2')

let l = new Linked(n1)
l.prepend(n2)
l.append(new Node('3'))
l.prepend(new Node('4'))
l.traverse(l.getHead())
l.InsertAfter(new Node('6'),'3')
l.traverse(l.getHead())

l.InsertBefore(new Node('5'),'6')
l.traverse(l.getHead())