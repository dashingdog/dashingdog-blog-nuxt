import message from '../models/message'

export const state = () => ({
  messages: [],
  total: 0,
  loading: false
})

export const mutations = {
  setMessages(state, { messages, total }) {
    state.messages = messages
    state.total = total
  },

  setMoreMessages(state, { messages }) {
    state.messages = state.messages.concat(messages)
  },

  setLoading(state, loading = false) {
    state.loading = loading
  },
}

export const actions = {
  async getMessages({ commit }, params) {
    try {
      const res = await message.getMessages(params)
      commit('setMessages', { messages: res.collection, total: res.total })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },

  async getMoreMessages({ commit, state }, params) {
    try {
      commit('setLoading', true)
      const res = await message.getMessages(params)
      commit('setMoreMessages', { messages: res.collection, total: res.total })
      commit('setLoading', false)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  },

  async createMessage({ commit, state }, params) {
    return await message.createMessage(params)
  }
}
