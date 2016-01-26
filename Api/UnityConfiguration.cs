using Data;
using Data.Contracts;
using Microsoft.Practices.Unity;
using Services;
using Services.Contracts;

namespace Api
{
    public class UnityConfiguration
    {
        public static IUnityContainer GetContainer(bool useMock = false)
        {
            var container = new UnityContainer();
            container.RegisterType<IModernCmsUow, ModernCmsUow>();
            container.RegisterType<IDbContext, ModernCmsContext>();
            container.RegisterType<IRepositoryProvider, RepositoryProvider>();
            container.RegisterType<IBrandService, BrandService>();
            return container;
        }
    }
}