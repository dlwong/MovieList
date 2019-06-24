import MovieListEntry from './MovieListEntry.js';

var MovieList = props => {

  return React.createElement(
    'div',
    null,
    props.items.map(({ title, watched, showComponent }) => React.createElement(
      'ul',
      { key: title, onClick: () => props.handlePanel(title) },
      ' ',
      title,
      showComponent && React.createElement(MovieListEntry, { title: title, watched: watched, handleToggle: props.handleToggle })
    ))
  );
};

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJNb3ZpZUxpc3QiLCJwcm9wcyIsIml0ZW1zIiwibWFwIiwidGl0bGUiLCJ3YXRjaGVkIiwic2hvd0NvbXBvbmVudCIsImhhbmRsZVBhbmVsIiwiaGFuZGxlVG9nZ2xlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxjQUFQLE1BQTJCLHFCQUEzQjs7QUFFQSxJQUFJQyxZQUFhQyxLQUFELElBQVc7O0FBRXpCLFNBQ0U7QUFBQTtBQUFBO0FBQ0dBLFVBQU1DLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixDQUFDLEVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFpQkMsYUFBakIsRUFBRCxLQUNiO0FBQUE7QUFBQSxRQUFJLEtBQUtGLEtBQVQsRUFBZ0IsU0FBUyxNQUFNSCxNQUFNTSxXQUFOLENBQWtCSCxLQUFsQixDQUEvQjtBQUFBO0FBQTJEQSxXQUEzRDtBQUNFRSx1QkFBa0Isb0JBQUMsY0FBRCxJQUFnQixPQUFPRixLQUF2QixFQUE4QixTQUFTQyxPQUF2QyxFQUFnRCxjQUFjSixNQUFNTyxZQUFwRTtBQURwQixLQURIO0FBREgsR0FERjtBQVFDLENBVkg7O0FBYUEsZUFBZVIsU0FBZiIsImZpbGUiOiJNb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aWVMaXN0RW50cnkgZnJvbSAnLi9Nb3ZpZUxpc3RFbnRyeS5qcyc7XG5cbnZhciBNb3ZpZUxpc3QgPSAocHJvcHMpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7cHJvcHMuaXRlbXMubWFwKCh7dGl0bGUsIHdhdGNoZWQsIHNob3dDb21wb25lbnR9KSA9PiBcbiAgICAgICAgICA8dWwga2V5PXt0aXRsZX0gb25DbGljaz17KCkgPT4gcHJvcHMuaGFuZGxlUGFuZWwodGl0bGUpfT4ge3RpdGxlfVxuICAgICAgICAgICB7c2hvd0NvbXBvbmVudCAmJiAgPE1vdmllTGlzdEVudHJ5IHRpdGxlPXt0aXRsZX0gd2F0Y2hlZD17d2F0Y2hlZH0gaGFuZGxlVG9nZ2xlPXtwcm9wcy5oYW5kbGVUb2dnbGV9Lz4gfSBcbiAgICAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgPC9kaXY+KVxuICB9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDsgXG4iXX0=