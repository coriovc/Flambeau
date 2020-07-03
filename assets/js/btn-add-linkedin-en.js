var campos_max          = 4;   //max de 2 campos

        var x = 0;
        $('#add_field').click (function(e) {
                e.preventDefault();     //prevenir novos clicks
                if (x < campos_max) {
                        $('#listas').append('<div class="col-lg-5 my-4 form-label-group">\
                          <input type="text" name="linkedin" value="" id="linkedin" class="form-control" placeholder="Add Linkedin">\
                          <label for="linkedin">Add LinkedIn</label>\
                          <a href="#" class="remover_campo">Delete</a>\
                          </div>');
                        x++;
                }
        });
        // Remover o div anterior
        $('#listas').on("click",".remover_campo",function(e) {
                e.preventDefault();
                $(this).parent('div').remove();
                x--;
        });

