import { nanoid } from 'nanoid'

// 用于vue的diff算法，为每个元素创建一个独一无二的ID
export default function generateID() {
    return nanoid()
}
