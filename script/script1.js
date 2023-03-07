function formulario () {
    return `<div id="form" >
    <form>
        <fieldset>
            <div>
                <label id="form2" >Name</label><br>
                <input id="form1" type="text"  name="FormInput1">
            </div>
            <div>
                <label id="form2" for="FormInput2">Email</label><br>
                <input id="form1" type="email" id="FormInput2"  name="FormInput">
            </div>
            <div>
                <label id="form2" for="FormTextarea1">Mensage</label><br>
                <textarea id="form1" rows="3" name="FormTextarea1"> </textarea>
            </div>
        </fieldset>
        <input type="submit" value="send" id="bottom">
    </form>
</div>
</div>
    `
    
}
document.querySelector('.formu').innerHTML += formulario(); 