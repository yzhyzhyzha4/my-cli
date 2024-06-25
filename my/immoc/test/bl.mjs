import { BufferListStream } from 'bl'

const bl = new BufferListStream()
bl.append(Buffer.from('abc'))
bl.append(Buffer.from('def'))

console.log(bl.length)
//输入缓冲
console.log(bl.toString())
