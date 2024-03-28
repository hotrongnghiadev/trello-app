export const addPlaceholderCard = (column) => {
  return {
    _id: `${column._id}-placehoder-card`,
    boardId: column.boardId,
    columnId: column._id,
    FE_PlaceholderCard: true
  }
}
