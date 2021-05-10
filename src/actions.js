export const deleteMessage = (id,userId,threadId) => {
    return {
        type: 'DELETE_MESSAGE',
        id: id,
        userId,
        threadId
    };
};

export const addMessage = (text, threadId) => {
    return {
        type: 'ADD_MESSAGE',
        text: text,
        threadId: threadId,
    };
};

export const openThread = (id) => {
    return {
        type: 'OPEN_THREAD',
        id: id,
    };
};

export const openUser = (id) => {
    return {
        type: 'OPEN_USER',
        id: id,
    };
};