export const deleteMessage = (id,userId,threadId) => {
    return {
        type: 'DELETE_MESSAGE',
        id: id,
        userId,
        threadId
    };
};

export const addMessage = (text, userId, threadId) => {
    console.log()
    return {
        type: 'ADD_MESSAGE',
        text: text,
        threadId: threadId,
        userId: userId,
    };
};

export const openThread = (id) => {
    return {
        type: 'OPEN_THREAD',
        id: id,
    };
};

export const openUser = (id, activeThreadId) => {
    return {
        type: 'OPEN_USER',
        id: id,
        threadId: activeThreadId
    };
};

export const addThread = (userName, threadName) => {
    return {
        type: 'ADD_THREAD',
        userName,
        threadName
    };
};