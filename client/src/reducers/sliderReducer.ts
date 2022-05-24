import { SliderReducerType } from '../types/reducers/sliderReducer';

const initialState: SliderReducerType = {
  slides: [
    {
      id: 0,
      name: 'Понедельник',
      rows: [
        {
          id: 0,
          title: 'утро',
          time: '09:50',
          isOpenedTasks: false,
          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'установить питон', isCompleted: false },
            { id: 1, text: 'удалить питон с компа', isCompleted: false },
            { id: 2, text: 'удалить питон с памяти', isCompleted: false },
          ],
        },
        {
          id: 1,
          title: 'день',
          time: '09:51',
          isOpenedTasks: false,
          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'покушац', isCompleted: false },
            { id: 1, text: 'сделать уроки', isCompleted: false },
            { id: 2, text: 'шучу, какие уроки? 😆', isCompleted: false },
          ],
        },
      ],
    },
    {
      id: 1,
      name: 'Вторник',
      rows: [
        {
          id: 0,
          title: 'утро',
          time: '09:50',
          isOpenedTasks: false,
          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'установить питон', isCompleted: false },
            { id: 1, text: 'удалить питон с компа', isCompleted: false },
            { id: 2, text: 'удалить питон с памяти', isCompleted: false },
          ],
        },
        {
          id: 1,
          title: 'день',
          time: '09:51',
          isOpenedTasks: false,
          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'покушац', isCompleted: false },
            { id: 1, text: 'сделать уроки', isCompleted: false },
            { id: 2, text: 'шучу, какие уроки? 😆', isCompleted: false },
          ],
        },
        {
          id: 2,
          title: 'вечер',
          time: '09:52',
          isOpenedTasks: false,
          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'дать питону второй шанс', isCompleted: false },
            { id: 1, text: 'удалить питон с компа', isCompleted: false },
            { id: 2, text: 'удалить питон с памяти', isCompleted: false },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Среда',
      rows: [
        {
          id: 0,
          title: 'утро',
          time: '09:50',
          isOpenedTasks: false,
          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'установить питон', isCompleted: false },
            { id: 1, text: 'удалить питон с компа', isCompleted: false },
            { id: 2, text: 'удалить питон с памяти', isCompleted: false },
          ],
        },
        {
          id: 1,
          title: 'день',
          time: '09:51',
          isOpenedTasks: false,
          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'покушац', isCompleted: false },
            { id: 1, text: 'сделать уроки', isCompleted: false },
            { id: 2, text: 'шучу, какие уроки? 😆', isCompleted: false },
          ],
        },
        {
          id: 2,
          title: 'вечер',
          time: '09:52',
          isOpenedTasks: false,
          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'дать питону второй шанс', isCompleted: false },
            { id: 1, text: 'удалить питон с компа', isCompleted: false },
            { id: 2, text: 'удалить питон с памяти', isCompleted: false },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Четвер',
      rows: [
        {
          id: 0,
          title: 'утро',
          time: '09:50',
          isOpenedTasks: false,
          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'установить питон', isCompleted: false },
            { id: 1, text: 'удалить питон с компа', isCompleted: false },
            { id: 2, text: 'удалить питон с памяти', isCompleted: false },
          ],
        },
        {
          id: 1,
          title: 'день',
          time: '09:51',
          isOpenedTasks: false,

          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'покушац', isCompleted: false },
            { id: 1, text: 'сделать уроки', isCompleted: false },
            { id: 2, text: 'шучу, какие уроки? 😆', isCompleted: false },
          ],
        },
        {
          id: 2,
          title: 'вечер',
          time: '09:52',
          isOpenedTasks: false,

          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'дать питону второй шанс', isCompleted: false },
            { id: 1, text: 'удалить питон с компа', isCompleted: false },
            { id: 2, text: 'удалить питон с памяти', isCompleted: false },
          ],
        },
      ],
    },
    {
      id: 4,
      name: 'Пятница',
      rows: [
        {
          id: 0,
          title: 'утро',
          time: '09:50',
          isOpenedTasks: false,

          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'установить питон', isCompleted: false },
            { id: 1, text: 'удалить питон с компа', isCompleted: false },
            { id: 2, text: 'удалить питон с памяти', isCompleted: false },
          ],
        },
        {
          id: 1,
          title: 'день',
          time: '09:51',
          isOpenedTasks: false,

          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'покушац', isCompleted: false },
            { id: 1, text: 'сделать уроки', isCompleted: false },
            { id: 2, text: 'шучу, какие уроки? 😆', isCompleted: false },
          ],
        },
        {
          id: 2,
          title: 'вечер',
          time: '09:52',
          isOpenedTasks: false,

          countOfTasks: 3,
          countOfCompletedTasks: 0,
          isCompletedRow: false,
          tasks: [
            { id: 0, text: 'дать питону второй шанс', isCompleted: false },
            { id: 1, text: 'удалить питон с компа', isCompleted: false },
            { id: 2, text: 'удалить питон с памяти', isCompleted: false },
          ],
        },
      ],
    },
  ],
};

export const sliderReducer = (state = initialState, action: any): typeof initialState => {
  switch (action.type) {
    case 'TOGGLE_CHANGE_IS_OPENED_TASKS':
      return {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id !== action.slideId) {
            return slide;
          } else {
            return {
              ...slide,
              rows: slide.rows.map((row) => {
                if (row.id !== action.rowId) {
                  return row;
                } else {
                  return {
                    ...row,
                    isOpenedTasks: !row.isOpenedTasks,
                  };
                }
              }),
            };
          }
        }),
      };
    case 'TOGGLE_CHANGE_COMPLETED_STATUS':
      return {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id !== action.slideId) {
            return slide;
          } else {
            return {
              ...slide,
              rows: slide.rows.map((row) => {
                if (row.id !== action.rowId) {
                  return row;
                } else {
                  return {
                    ...row,
                    tasks: row.tasks.map((task) => {
                      if (task.id !== action.taskId) {
                        return task;
                      } else {
                        return {
                          ...task,
                          isCompleted: !task.isCompleted,
                        };
                      }
                    }),
                  };
                }
              }),
            };
          }
        }),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id !== action.slideId) {
            return slide;
          } else {
            return {
              ...slide,
              rows: slide.rows.map((row) => {
                if (row.id !== action.rowId) {
                  return row;
                } else {
                  return {
                    ...row,
                    tasks: row.tasks.filter((task) => {
                      if (task.id !== action.taskId) {
                        return task;
                      }
                    }),
                  };
                }
              }),
            };
          }
        }),
      };
    case 'CHANGE_ROW_COMPLETED_STATUS':
      return {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id !== action.slideId) {
            return slide;
          } else {
            return {
              ...slide,
              rows: slide.rows.map((row) => {
                if (row.id !== action.rowId) {
                  return row;
                } else {
                  return {
                    ...row,
                    isCompletedRow: action.isEqual,
                  };
                }
              }),
            };
          }
        }),
      };

    default:
      return state;
  }
};
