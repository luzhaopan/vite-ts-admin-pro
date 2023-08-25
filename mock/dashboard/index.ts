import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

interface ListProps {
  id: string
  author: string
  title: string
  content: string
  time: string
}

const timeout = 1000

const List: ListProps[] = []

for (let i = 0; i < 5; i++) {
  List.push(
    Mock.mock({
      id: '@increment(1)',
      author: '@cname',
      title: '@title(5, 10)',
      content: '@cword(12, 18)',
      time: '@datetime'
    })
  )
}

export default [
  {
    url: '/analysis/total',
    method: 'get',
    timeout,
    response: () => {
      return {
        code: 200,
        data: List
      }
    }
  }
] as MockMethod[]
