exports.name = 'vue-global-event';

exports.options = {
  canHaveType: true, // type of event-payload
  canHaveName: true, // name of emitted event
  onTagged(doclet, tag) {
    doclet._isVueDoc = true;
    doclet._vueGlobalEvent = doclet._vueGlobalEvent || [];
    doclet._vueGlobalEvent.push(tag.value || {});
  },
};
