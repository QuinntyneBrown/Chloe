using Data;
using Data.Contracts;
using Microsoft.Practices.Unity;

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
            return container;
        }
    }
}