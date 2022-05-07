<%@ Page Language="C#" %>

<!DOCTYPE html>
<script runat="server">

    string drink, sugar, milk;

    private void displayDrink()
    {
        if (drink == "t")
            drink = "Tea";
        else if (drink == "c")
            drink = "Coffee";
        else if (drink == "s")
            drink = "Soup";

        if (sugar == "y")
            sugar = "with sugar";
        else
            sugar = "with no sugar";

        if (milk == "y")
            milk = "with milk";
        else
            milk = "with no milk";

        Label1.Text = "Please take your " + drink + " served " + milk + " and " + sugar;
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.HttpMethod == "GET")
        {
            drink = Request.QueryString["drink"];
            sugar = Request.QueryString["sugar"];
            milk = Request.QueryString["milk"];
        }
        if (Request.HttpMethod == "POST")
        {
            drink = Request.Form["drink"];
            sugar = Request.Form["sugar"];
            milk = Request.Form["milk"];
        }
        displayDrink();
    }
</script>


<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
        </div>
    </form>
</body>
</html>
