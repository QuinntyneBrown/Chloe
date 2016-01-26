using System.Web.Http;
using Newtonsoft.Json;
using Owin;
using Microsoft.Owin.Cors;

namespace Api
{
    public class ApiConfiguration
    {
        public static void Install(HttpConfiguration config, IAppBuilder app)
        {
            var jSettings = new JsonSerializerSettings();
            
            jSettings.Formatting = Formatting.Indented;
            
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            config.Formatters.JsonFormatter.SerializerSettings = jSettings;

            config.MapHttpAttributeRoutes();

            app.UseCors(CorsOptions.AllowAll);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );
        }
    }
}