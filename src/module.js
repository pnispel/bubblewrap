class Event {
  constructor({ event, payload }) {
    this.event = event
    this.payload = payload
    this.propagate = true
  }

  stopPropagation() {
    this.propagate = false
  }
}

class Node {
  constructor({ parent, payload }) {
    this.parent = parent
    this.payload = payload
  }

  createChild({ payload }) {
    return new Node({ parent: this, payload })
  }

  trigger(event, ...args) {
    const wrappedEvent = new Event({ event, payload: this.payload })

    this.handle && this.handle(wrappedEvent, ...args)
    this.parent && wrappedEvent.propagate && this.parent.trigger(wrappedEvent, ...args)
  }
}

export default Node;
