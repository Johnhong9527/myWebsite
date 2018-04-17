const state = {
  user_id: "",
  count: 1
};

// getters
const getters = {
  count: function(state) {
    return state.count;
  }
};

// actions
const actions = {
  addAction(context) {
    context.commit("add", 10);
  },
  reduceAction({ commit }) {
    commit("reduce", 10);
  }
};

// mutations
const mutations = {
  add(state, n) {
    if (state.count < 10) {
      n = Number.parseInt(n);
      state.count += n;
    }
  },
  reduce(state, n) {
    if (state.count > 1) {
      n = Number.parseInt(n);
      state.count -= n;
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
