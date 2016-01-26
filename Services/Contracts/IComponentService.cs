using Dtos;
using System.Collections.Generic;

namespace Services.Contracts
{
    public interface IComponentService
    {
        ComponentDto Add(ComponentDto dto);
        bool Remove(int id);
        ICollection<ComponentDto> Get();
    }
}
