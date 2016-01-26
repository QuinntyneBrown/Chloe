using Models;

namespace Data.Contracts
{
    public interface IModernCmsUow
    {
        IRepository<Brand> Brands { get; }
    }
}
