import { Component } from 'react';
import { ReactComponent as TodoFilterIcon } from './images/filter.svg';
import { ReactComponent as TodoCompleteIcon } from './images/complete.svg';
import { ReactComponent as TodoDeleteIcon } from './images/delete.svg';
import { ReactComponent as TodoEditIcon } from './images/edit.svg';
import { ReactComponent as TodoAddIcon } from './images/add.svg';
import { ReactComponent as TodoClearAllIcon } from './images/allDelete.svg';
import Modal from '../Modal';
import AddTodoForm from './AddTodoForm/AddTodoForm';
import './Todo.scss';

export default class Todo extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <section className="todo">
        <div className="container">
          {/* todoBlocks */}
          <ul className="todoBlocks">
            {/* todoBlocks item*/}
            <li className="todoBlocks__item">
              <div className="todoBlocks__itemWrapper">
                {/* todoBlocks filter*/}
                <button className="todoBlocks__filter" type="button">
                  <TodoFilterIcon />
                </button>
                {/* todoBlocks title*/}
                <h2 className="todoBlocks__title">ToDo</h2>
                {/* add todo*/}
                <button
                  className="todoBlocks__addTodo"
                  type="button"
                  onClick={this.toggleModal}
                >
                  <TodoAddIcon />
                </button>
              </div>
              {/* todos*/}
              <ul className="todo__list">
                {/* todos item*/}
                <li className="todo__item">
                  <div className="todo__info">
                    <h3 className="todo__title">Todo name</h3>
                    <span className="todo__period">Today</span>
                  </div>
                  <div className="todo__actions">
                    <ul className="todo__buttons">
                      <li className="todo__buttons-item">
                        <button className="todo__button complete">
                          <TodoCompleteIcon />
                        </button>
                      </li>
                      <li className="todo__buttons-item">
                        <button className="todo__button edit">
                          <TodoEditIcon />
                        </button>
                      </li>
                      <li className="todo__buttons-item">
                        <button className="todo__button delete">
                          <TodoDeleteIcon />
                        </button>
                      </li>
                    </ul>
                    <div className="todo__deadline">
                      <span className="todo__deadlineTitle">Deadline</span>
                      <span className="todo__deadlineTime">23:59</span>
                      <span className="todo__deadlineDate">14.06</span>
                    </div>
                  </div>
                </li>
                <li className="todo__item">
                  <div className="todo__info">
                    <h3 className="todo__title">Todo name</h3>
                    <span className="todo__period">Today</span>
                  </div>
                  <div className="todo__actions">
                    <ul className="todo__buttons">
                      <li className="todo__buttons-item">
                        <button className="todo__button complete">
                          <TodoCompleteIcon />
                        </button>
                      </li>
                      <li className="todo__buttons-item">
                        <button className="todo__button edit">
                          <TodoEditIcon />
                        </button>
                      </li>
                      <li className="todo__buttons-item">
                        <button className="todo__button delete">
                          <TodoDeleteIcon />
                        </button>
                      </li>
                    </ul>
                    <div className="todo__deadline">
                      <span className="todo__deadlineTitle">Deadline</span>
                      <span className="todo__deadlineTime">23:59</span>
                      <span className="todo__deadlineDate">14.06</span>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            <li className="todoBlocks__item">
              <div className="todoBlocks__itemWrapper">
                {/* todoBlocks filter*/}
                <button className="todoBlocks__filter">
                  <TodoFilterIcon />
                </button>
                {/* todoBlocks title*/}
                <h2 className="todoBlocks__title">Completed</h2>
                {/* clear all completed todo*/}
                <button
                  className="todoBlocks__addTodo"
                  type="button"
                  onClick={this.toggleModal}
                >
                  <TodoClearAllIcon />
                </button>
              </div>
              {/* todos*/}
              <ul className="todo__list">
                {/* todos item*/}
                <li className="todo__item">
                  <div className="todo__info">
                    <h3 className="todo__title">Todo name</h3>
                    <span className="todo__period">Today</span>
                  </div>
                  <div className="todo__actions">
                    <ul className="todo__buttons">
                      <li className="todo__buttons-item">
                        <button className="todo__button">
                          <TodoCompleteIcon />
                        </button>
                      </li>
                      <li className="todo__buttons-item">
                        <button className="todo__button">
                          <TodoEditIcon />
                        </button>
                      </li>
                      <li className="todo__buttons-item">
                        <button className="todo__button delete">
                          <TodoDeleteIcon />
                        </button>
                      </li>
                    </ul>
                    <div className="todo__deadline">
                      <span className="todo__deadlineTitle">Deadline</span>
                      <span className="todo__deadlineTime">23:59</span>
                      <span className="todo__deadlineDate">14.06</span>
                    </div>
                  </div>
                </li>
              </ul>
              {/* add todo*/}
            </li>
            {/* ---------------------------------- */}
            <li className="todoBlocks__item">
              <div className="todoBlocks__itemWrapper">
                {/* todoBlocks filter*/}
                <button className="todoBlocks__filter">
                  <TodoFilterIcon />
                </button>
                {/* todoBlocks title*/}
                <h2 className="todoBlocks__title">Deleted</h2>
                {/* delete all todo*/}
                <button
                  className="todoBlocks__addTodo"
                  type="button"
                  onClick={this.toggleModal}
                >
                  <TodoClearAllIcon />
                </button>
              </div>
              {/* todos*/}
              <ul className="todo__list">
                {/* todos item*/}
                <li className="todo__item">
                  <div className="todo__info">
                    <h3 className="todo__title">Todo name</h3>
                    <span className="todo__period">Today</span>
                  </div>
                  <div className="todo__actions">
                    <ul className="todo__buttons">
                      <li className="todo__buttons-item">
                        <button className="todo__button">
                          <TodoCompleteIcon />
                        </button>
                      </li>
                      <li className="todo__buttons-item">
                        <button className="todo__button">
                          <TodoEditIcon />
                        </button>
                      </li>
                      <li className="todo__buttons-item">
                        <button className="todo__button delete">
                          <TodoDeleteIcon />
                        </button>
                      </li>
                    </ul>
                    <div className="todo__deadline">
                      <span className="todo__deadlineTitle">Deadline</span>
                      <span className="todo__deadlineTime">23:59</span>
                      <span className="todo__deadlineDate">14.06</span>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            {/* END todoBlocks item*/}
          </ul>
          {/* END todoBlocks */}
        </div>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <AddTodoForm />
          </Modal>
        )}
      </section>
    );
  }
}
