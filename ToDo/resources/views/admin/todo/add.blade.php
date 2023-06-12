@extends('admin.main')

@section('content')
<form>
    <div class="form-group">
        <label >Add ToDo</label>
        <div class="form-content">
        <input type="text" name="name" class="form-control" id="todo" placeholder="Create a new todo" >
        <button type="submit" class="btn btn-primary" id="btnAdd" >Add Task</button>
        </div>

      </div>
      <div class="form-group" id="divList">
        <label >List Task Todo</label>
        <ul id="ul">
            <li>
                <input class="custom-control-input" value="1" type="checkbox" id="active" name="active">
                <label for="active" class="custom-control-label" id="nameLabel">Create a new todo</label>
            </li>

        </ul>
        <div class="footer" id="footer">
            <label class="all" id="all">Item</label>
            <button type="submit" class="btn btn-primary" id="btnClear">Clear Complete</button>
        </div>
      </div>

</form>
@endsection

