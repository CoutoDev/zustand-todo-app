import { expect, test, vi } from "vitest"

import { useStore } from "./store"
import { useEffect } from "react"
import { render } from "@testing-library/react"

vi.mock('zustand')
vi.mock('uuid', () => ({ v4: () => '123456789' }));

const TestComponent = ({selector, effect}) => {
  const items = useStore(selector)

  useEffect(() => effect(items), [items, effect])

  return null;
}

test("should return default value at the start", () => {
  const selector = (store) => store.tasks;
  const effect = vi.fn();

  render(<TestComponent selector={selector} effect={effect} />)

  expect(effect).toHaveBeenCalledWith([]);
})

test("should add an item to the store and rerun the effect", () => {
  const selector = (store) => ({ tasks: store.tasks, addTask: store.addTask });
  const effect = vi.fn().mockImplementation((items) => {
    if(items.tasks.length === 0) {
      items.addTask("a","b")
    }
  });

  render(<TestComponent selector={selector} effect={effect} />)

  expect(effect).toHaveBeenCalledTimes(2);
  expect(effect).toHaveBeenCalledWith(
    expect.objectContaining(
      {
        tasks: [{
          id: '123456789',
          title: 'a',
          state: 'b'
        }]
      }
    )
  );
})

test("should add an item to the store and rerun the effect", () => {
  const selector = (store) => ({ tasks: store.tasks, addTask: store.addTask, deleteTask: store.deleteTask });
  let createdTask = false;
  let currentItems = undefined;

  const effect = vi.fn().mockImplementation((items) => {
    currentItems = items;
    if(!createdTask) {
      items.addTask("a","b")
      createdTask = true;
    }

    if(items.tasks.length) {
      items.deleteTask('123456789')
    }
  });

  render(<TestComponent selector={selector} effect={effect} />)

  expect(effect).toHaveBeenCalledTimes(3);
  expect(currentItems.tasks).toEqual([]);
})