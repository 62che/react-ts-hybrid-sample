// https://blog.rhostem.com/posts/2019-07-22-mobx-v6-and-react-v16-8
import { useContext } from 'react'
import { MobXProviderContext } from 'mobx-react'

import RootStore from 'store'

/**
 * React hooks를 사용하는 컴포넌트에서 store를 가져올 때 사용한다.
 * 참조) https://mobx-react.js.org/recipes-migration#hooks-for-the-rescue
 */
export const useStore = (): RootStore => {
  return useContext(MobXProviderContext) as RootStore
}
