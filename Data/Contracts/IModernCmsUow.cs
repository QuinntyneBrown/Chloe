using Models;

namespace Data.Contracts
{
    public interface IModernCmsUow
    {
        IRepository<Brand> Brands { get; }
        IRepository<Bundle> Bundles { get; }
        IRepository<Component> Components { get; }
        IRepository<Page> Pages { get; }
        IRepository<Provider> Providers { get; }
        void SaveChanges();
    }
}
