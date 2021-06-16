import { ReactComponent as TodoFilterIcon } from './images/filter.svg';
import { ReactComponent as TodoCompleteIcon } from './images/complete.svg';
import { ReactComponent as TodoDeleteIcon } from './images/delete.svg';
import { ReactComponent as TodoEditIcon } from './images/edit.svg';
import './Todo.scss';

export default function Todo() {
  return (
    <section className="todo">
      <div className="container">
        <ul className="todoBlocks">
          <li className="todoBlocks__item">
            <div className="todoBlocks__itemWrapper">
              <h2 className="todoBlocks__title">To Do</h2>
              <button className="todoBlocks__filter">
                <TodoFilterIcon />
              </button>
            </div>
            <ul className="todo__list">
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
                      <button className="todo__button delete">
                        <TodoDeleteIcon />
                      </button>
                    </li>
                    <li className="todo__buttons-item">
                      <button className="todo__button edit">
                        <TodoEditIcon />
                      </button>
                    </li>
                  </ul>
                  <div className="todo__deadline">Deadline</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
