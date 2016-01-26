using Dtos;
using System.Collections.Generic;

namespace Services.Contracts
{
    public interface IPageService
    {
        PageDto Add(PageDto dto);
        bool Remove(int id);
        ICollection<PageDto> Get();
    }
}
