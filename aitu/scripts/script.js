
$(function frmotpr(){
        var field = new Array("email", "password", "name", "surname","gpa", "dateofbirth", "gender","gpa", 
            "phone_number", "course","price","persinformation","subjectinformation");
        $("#reg_form").submit(function() {
            var error=0;
            $("#reg_form").find(":input").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
                        if(!$(this).val()){
                            $(this).addClass('notvalid');
                            error=1;    
                        }
                        else{
                            $(this).removeClass('notvalid');
                        }
                    }                       
                }               
           })
            if(error==0){
            return true;
            }else{ var err_text = "";
            if(error==1)  err_text="Не все обязательные поля заполнены!";
            $("#messenger").html(err_text); 
            $("#messenger").fadeIn("slow"); 
            return false;
            }
        })
    });


var phoneMask = IMask(
  document.getElementById('input_phone'), {
    mask: '+{7}(000)000-00-00'
  });
